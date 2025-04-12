import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";



@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: (error?: any) => void) {
        console.log(req.headers);
        if (req.headers.authorization) next();
        throw new UnauthorizedException()
    }
}