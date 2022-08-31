import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  name: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    height: 56,

    flex: 1,
    fontSize: 16,
    color: "#FFF",
    padding: 16,
    marginRight: 7,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
