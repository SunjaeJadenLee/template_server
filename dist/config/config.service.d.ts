export declare class ConfigService {
    readonly envConfig: {
        [key: string]: string;
    };
    constructor();
    getAny(key: string): string;
    getString(key: string): string;
    getNumber(key: string): number;
    getBoolean(key: string): boolean;
}
