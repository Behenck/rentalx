import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { auth } from '@config/auth';
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IPayload {
    sub: string;
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository") 
        private usersTokenRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private DateProvider: IDateProvider
    ) {}
    async execute(token: string): Promise<string> {
        const { expires_in_refresh_token, expires_refresh_token_days, secret_refresh_token } = auth;
        const { email, sub: user_id } = verify(token, secret_refresh_token) as IPayload;

        const userToken = await this.usersTokenRepository.findByUserIdAndRefreshToken(user_id, token);

        if (!userToken) {
            throw new AppError("Refresh token not found");
        }

        await this.usersTokenRepository.deleteById(userToken.id);
    
        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user_id,
            expiresIn: expires_in_refresh_token,
        });

        const expires_date = this.DateProvider.addDays(
            expires_refresh_token_days
          );

        await this.usersTokenRepository.create({
            expires_date,
            refresh_token,
            user_id
        });

        return refresh_token;
    } 
}

export { RefreshTokenUseCase }