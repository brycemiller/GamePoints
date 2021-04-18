import PointsCalculator from "./PointsCalculator";
import { Game } from "../Game/types";

/**
 * A factory class for nicing the creation of Helper classes.
 */
export default class HelperFactory {
    public static PointsCalculator(pointsSchemes: Game.IPointsScheme[])
    : Helpers.IPointsCalculator {
        return new PointsCalculator(pointsSchemes);
    }
}