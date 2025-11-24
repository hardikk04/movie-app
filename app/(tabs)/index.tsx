import MovieCard from "@/components/MovieCard";
import SearchBox from "@/components/SearchBox";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovie({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="!w-full absolute"></Image>
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          source={icons.logo}
        ></Image>

        {moviesLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error : {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBox
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search for a movie"
            ></SearchBox>

            <>
              <Text className="text-lg text-white  font-bold mt-5 mb-3">
                Latest
              </Text>
              <FlatList
                data={movies?.results}
                renderItem={({ item }) => <MovieCard {...item}/>}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              ></FlatList>
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
