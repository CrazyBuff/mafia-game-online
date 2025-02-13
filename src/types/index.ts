import { WebSocket } from "ws";

export interface Allegiance {
  name: string;
  color: string;
}

export interface Role {
  name: string;
  iconSrc: string;
  allegiance: Allegiance;
  description: string;
}

export interface Player {
  clientId: string;
  socket: WebSocket;
  username?: string;
  role?: string;
  allegiance?: number;
}

export interface Settings {
  maxPlayers: number;
  roundSpeed: number;
  roles: Role[];
}

export enum GamePhase {
  NIGHT = 0,
  DISCUSSION = 1,
  VOTING = 2,
  COMPLETE = 3,
}

export interface GameState {
  round: number;
  phase: GamePhase;
  dead: Player[];
}

export interface Room {
  roomId: string;
  host: string;
  players: Player[];
  gameState: GameState;
  settings: Settings;
}

export interface Message {
  type: MessageType;
  data: any;
}

export interface Client {
  ws: WebSocket;
  roomId?: string;
}

export enum MessageType {
  // Client Events
  CREATE_ROOM = "create-room",
  JOIN_ROOM = "join-room",
  LEAVE_ROOM = "leave-room",
  START_GAME = "start-game",
  CHANGE_SETTIING = "change-settings",
  SET_NAME = "set-name",
  STATE_UPDATE = "state-update",

  // Server Events
  JOINED_ROOM = "joined-room",
  PLAYER_JOINED = "player-joined",
  PLAYER_LEFT = "player-left",
  GAME_STARTED = "game-started",
  GAME_ENDED = "game-ended",
  SERVER_ERR = "server-error",
}
