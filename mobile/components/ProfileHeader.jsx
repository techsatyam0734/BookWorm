import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../assets/styles/profile.styles";
import { useAuthStore } from "../store/authStore";
import { Image } from "expo-image";
import { formatMemberSince } from "../lib/utils";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileHeader() {
  const { user, deleteAccount } = useAuthStore();

  const confirmDelete = () => {
    Alert.alert(
      "Delete account",
      "This permanently deletes your account and all your books.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            const result = await deleteAccount();
            if (!result.success) Alert.alert("Error", result.error);
          },
        },
      ],
    );
  };

  if (!user) return null;

  return (
    <View style={styles.profileHeader}>
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.memberSince}>
          🗓️ Joined {formatMemberSince(user.createdAt)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={confirmDelete}
        style={{ alignSelf: "center", marginTop: 16, padding: 8 }}
      >
        <Ionicons name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
}
