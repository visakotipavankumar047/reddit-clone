import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import posts from '../../../../assets/data/posts.json';
import { formatDistanceToNowStrict } from "date-fns";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import PostListItem from "../../../components/PostListItem";

export default function HomeScreen() {
  const post = posts[0]
  return (
   <View>
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />} 
    />
   </View>
  );
}

