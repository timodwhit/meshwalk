import { Vector3 } from 'three';
import type { Object3D } from 'three';
import { EventDispatcher } from './EventDispatcher';
import type { ComputedTriangle } from '../math/triangle';
export declare class CharacterController extends EventDispatcher {
    isCharacterController: boolean;
    object: Object3D;
    radius: number;
    position: Vector3;
    groundCheckDepth: number;
    maxSlopeGradient: number;
    isGrounded: boolean;
    isOnSlope: boolean;
    isIdling: boolean;
    isRunning: boolean;
    isJumping: boolean;
    direction: number;
    movementSpeed: number;
    velocity: Vector3;
    currentJumpPower: number;
    jumpStartTime: number;
    groundHeight: number;
    groundNormal: Vector3;
    nearTriangles: ComputedTriangle[];
    contactInfo: {
        depth: number;
        point: Vector3;
        triangle: ComputedTriangle;
    }[];
    private _events;
    constructor(object3d: Object3D, radius: number);
    setNearTriangles(nearTriangles: ComputedTriangle[]): void;
    update(deltaTime: number): void;
    _updateVelocity(): void;
    _checkGround(): void;
    _updatePosition(deltaTime: number): void;
    _collisionDetection(): void;
    _solvePosition(): void;
    setDirection(): void;
    jump(): void;
    _updateJumping(): void;
    teleport(x: number, y: number, z: number): void;
}