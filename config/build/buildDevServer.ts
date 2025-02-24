import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {BuildOptions} from "./types/types";

export const buildDevServer = (option: BuildOptions): DevServerConfiguration => {
    const {port} = option;

    return {
        port: port,
        open: true
    }
}