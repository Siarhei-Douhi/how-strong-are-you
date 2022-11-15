import { levelsHorisontBar } from "../../workoutData/levelsHorisontBar";
import { levelsBars } from "../../workoutData/levelsBars";
import { levelsPushup } from "../../workoutData/levelsPushup";
import { ILevel } from "../../types/levels";

const getArrayLevel = (array: ILevel[], id: number) => {
  return array.find((item) => {
    if (+item.id === id) {
      return item;
    }
  });
};

export const getPageById = (id: number) => {
  if (id < 12) {
    return "/horizontal-bar";
  } else if (id > 11 && id < 32) {
    return "/bars";
  }

  return "/pushup";
};

export const getKeyById = (id: number) => {
  if (id < 12) {
    return `horisontalBar`;
  } else if (id > 11 && id < 32) {
    return "bars";
  }
  return "pushup";
};

export const getLevelData = (id: number) => {
  let data = getArrayLevel(levelsHorisontBar, id);

  if (id > 11 && id < 32) {
    data = getArrayLevel(levelsBars, id);
  }
  if (id > 31) {
    data = getArrayLevel(levelsPushup, id);
  }
  return {
    level: data?.numberLevel,
    arrayLevelId: data?.programLevel,
  };
};
