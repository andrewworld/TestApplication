import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  title: {
    position: "absolute",
    left: 112,
    right: 112,
    textAlign: "center",
    color: "#fff",
    fontSize: 24
  },
  left: {
    flex: 1,
    alignItems: "flex-start"
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  }
});
