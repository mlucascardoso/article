import express from 'express';

import { ApplicationController } from './controller';

export class ApplicationFactory {
    static assemble(): ApplicationController {
        const expressApp = express();

        return new ApplicationController(expressApp);
    }
}