import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "./../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().label("Category"),
  description: Yup.string("Description"),
  images: Yup.array().min(1, "Please select at lest one image."),
});

const catagories = [
  { value: 1, label: "Furniture", icon: "floor-lamp", bg: "#fc5c65" },
  { value: 2, label: "Cars", icon: "car", bg: "#fd9644" },
  { value: 3, label: "Cameras", icon: "camera", bg: "#fed330" },
  { value: 4, label: "Games", icon: "cards", bg: "#26de81" },
  { value: 5, label: "Clothing", icon: "shoe-heel", bg: "#2bcbba" },
  { value: 6, label: "Sports", icon: "basketball", bg: "#45aaf2" },
  { value: 7, label: "Movies & Music", icon: "headphones", bg: "#4b7bec" },
  { value: 8, label: "Books", icon: "book-open-variant", bg: "#a55eea" },
  { value: 9, label: "Other", icon: "application", bg: "#778ca3" },
];

function ListingEditingScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          width={120}
          keyboardType="numeric"
          axLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          width={"50%"}
          items={catagories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditingScreen;
