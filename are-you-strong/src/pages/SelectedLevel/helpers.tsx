import { levelsHorisontBar } from "../../workoutData/levelsHorisontBar";
import { levelsBars } from "../../workoutData/levelsBars";
import { levelsPushup } from "../../workoutData/levelsPushup";
import { ILevel } from "../../types/levels";
import { horisontalBarGif, barsGif, pushupGif } from "../../assets";

import { useContext } from "react";

import { Context } from "../../App";

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
  // } else if (id > 31) {
  //   return "pushup";
  // }
  return "pushup";
};
// export const getLevelData = (id: number) => {
//   if (id < 12) {
//     const data = getArrayLevel(levelsHorisontBar, id);
//     return {
//       level: data?.numberLevel,
//       arrayLevelId: data?.programLevel,
//     };
//   }
//   if (id > 11 && id < 32) {
//     const data = getArrayLevel(levelsBars, id);
//     return {
//       level: data?.numberLevel,
//       arrayLevelId: data?.programLevel,
//     };
//   }
//   if (id > 31) {
//     const data = getArrayLevel(levelsPushup, id);
//     return {
//       level: data?.numberLevel,
//       arrayLevelId: data?.programLevel,
//     };
//   }
// };

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
