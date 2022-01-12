import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch (action.colorToChange) {
    case "red":
      // Cascade Notion is than to redifined {red: 0, green:0, blue:0}
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, bluee: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // dispatch === runMyReducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  //   console.log(red);
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
