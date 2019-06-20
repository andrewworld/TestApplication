import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#111111",
    borderBottomColor: "#222222",
    borderBottomWidth: 1
  },
  initialsContainer: {
    height: 48,
    width: 48,
    backgroundColor: "#484848",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  initials: {
    textAlign: "center",
    fontSize: 16,
    color: "#e5e5e5"
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16
  },
  name: {
    color: "#fff",
    fontSize: 16,
    paddingBottom: 8
  },
  phoneNumber: {
    color: "#777777",
    fontSize: 12
  }
});
