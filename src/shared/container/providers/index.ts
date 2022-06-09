import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { container } from "tsyringe";
import { DayjsDateProvider } from './implementations/DayjsDateProvider';

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)