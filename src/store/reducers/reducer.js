import {combineReducers} from "redux";
import {logger} from "./loger";
import {bidder} from "./bidders";
import {board} from "./board";
export const reducer= combineReducers({logger,bidder,board})