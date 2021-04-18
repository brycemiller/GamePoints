import PointsCalculator from "./PointsCalculator";
import { Game } from "../Game/types";

export default class HelperFactory {
    public static PointsCalculator(pointsSchemes: Game.IPointsScheme[])
    : Helpers.IPointsCalculator {
        return new PointsCalculator(pointsSchemes);
    }
}