import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  headerRightContainer: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#ec407a"
  },
  headerRightContainerDisabled: {
    backgroundColor: "#f48fb1"
  },
  headerRightText: {
    color: "#fff"
  },
  headerLeft: {
    color: "#ec407a"
  },
  deleteButton: {
    fontSize: 18,
    borderColor: "#b71c1c",
    borderRadius: 4,
    borderWidth: 1,
    margin: 16,
    textAlign: "center",
    padding: 16,
    color: "#b71c1c"
  }
});
