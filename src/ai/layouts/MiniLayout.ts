import {BuildingPlannerData} from "../../interfaces";
import {FixedLayout} from "./FixedLayout";
export class MiniLayout extends FixedLayout {

    public fixedMap: BuildingPlannerData = {
        name: "mini",
        pivot: {x: 20, y: 18},
        radius: 5,
        taper: 0,
        buildings: {
            tower: {pos: [{x: 21, y: 18}, {x: 20, y: 17}, {x: 20, y: 19}, {x: 21, y: 17}, {x: 19, y: 19},
                {x: 19, y: 18}]}, storage: {pos: [{x: 22, y: 19}]},
            extension: {pos: [{x: 21, y: 16}, {x: 22, y: 17}, {x: 17, y: 18}, {x: 18, y: 17}, {x: 17, y: 17},
                {x: 17, y: 16}, {x: 16, y: 15}, {x: 15, y: 15}, {x: 15, y: 14}, {x: 16, y: 13}, {x: 17, y: 13},
                {x: 17, y: 14}, {x: 18, y: 15}, {x: 19, y: 16}, {x: 19, y: 15}, {x: 16, y: 17}, {x: 15, y: 17},
                {x: 15, y: 16}, {x: 15, y: 18}, {x: 19, y: 14}, {x: 19, y: 13}, {x: 18, y: 13}, {x: 20, y: 15},
                {x: 20, y: 13}, {x: 21, y: 13}, {x: 22, y: 13}, {x: 23, y: 13}, {x: 23, y: 14}, {x: 22, y: 15},
                {x: 18, y: 19}, {x: 16, y: 18}, {x: 15, y: 19}, {x: 15, y: 20}, {x: 16, y: 20}, {x: 17, y: 20},
                {x: 16, y: 21}, {x: 15, y: 21}, {x: 15, y: 22}, {x: 15, y: 23}, {x: 16, y: 23}, {x: 17, y: 23},
                {x: 17, y: 22}, {x: 18, y: 22}, {x: 18, y: 21}, {x: 19, y: 20}, {x: 20, y: 14}, {x: 22, y: 14},
                {x: 24, y: 13}, {x: 25, y: 14}, {x: 25, y: 13}, {x: 25, y: 15}, {x: 24, y: 15}, {x: 23, y: 16},
                {x: 24, y: 16}, {x: 25, y: 16}, {x: 25, y: 17}, {x: 25, y: 18}, {x: 24, y: 18}, {x: 23, y: 18},
                {x: 15, y: 13}]},
            lab: {pos: [{x: 19, y: 23}, {x: 19, y: 22}, {x: 20, y: 23}, {x: 21, y: 23},  {x: 21, y: 22},
                {x: 22, y: 23}, {x: 23, y: 23}, {x: 23, y: 22}, {x: 19, y: 21}, {x: 23, y: 21}]},
            terminal: {pos: [{x: 20, y: 21}]},
            link: {pos: [{x: 24, y: 21}]},
            observer: {pos: [{x: 18, y: 23}]},
            road: {pos: [{x: 22, y: 20}, {x: 23, y: 19}, {x: 21, y: 21}, {x: 20, y: 22}, {x: 22, y: 22},
                {x: 24, y: 20}, {x: 25, y: 21}]},
            powerSpawn: {pos: [{x: 20, y: 20}]},
            spawn: {pos: [{x: 25, y: 20}, {x: 25, y: 22}, {x: 24, y: 23}]},
            nuker: {pos: [{x: 22, y: 21}]},
            rampart: {pos: [{x: 24, y: 23}, {x: 25, y: 22}, {x: 25, y: 20}, {x: 22, y: 21}, {x: 23, y: 21},
                {x: 23, y: 22}, {x: 23, y: 23}, {x: 22, y: 23}, {x: 21, y: 23}, {x: 21, y: 22}, {x: 20, y: 23},
                {x: 19, y: 23}, {x: 19, y: 22}, {x: 19, y: 21}, {x: 20, y: 21}, {x: 18, y: 23}, {x: 17, y: 23},
                {x: 16, y: 23}, {x: 15, y: 23}, {x: 15, y: 22}, {x: 15, y: 21}, {x: 15, y: 20}, {x: 15, y: 19},
                {x: 15, y: 18}, {x: 15, y: 17}, {x: 15, y: 16}, {x: 15, y: 15}, {x: 15, y: 14}, {x: 16, y: 13},
                {x: 17, y: 13}, {x: 18, y: 13}, {x: 19, y: 13}, {x: 20, y: 13}, {x: 21, y: 13}, {x: 22, y: 13},
                {x: 23, y: 13}, {x: 24, y: 13}, {x: 25, y: 13}, {x: 25, y: 14}, {x: 25, y: 15}, {x: 25, y: 16},
                {x: 25, y: 17}, {x: 25, y: 18}, {x: 22, y: 19}, {x: 25, y: 19}, {x: 25, y: 21}, {x: 25, y: 23},
                {x: 15, y: 13}]},
        },
    };
    protected tempMap = {
        [6]: {
            [STRUCTURE_LINK]: [ {x: 23, y: 21 } ],
        },
        [7]: {
            [STRUCTURE_LINK]: [ {x: 23, y: 21 }, {x: 22, y: 21} ],
        },
    };
}