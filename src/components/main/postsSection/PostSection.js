import React, { useEffect, useState } from "react";
import "./postSection.scss";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import PostInput from "./PostInput";
import Button from "../../Button";
import { Box } from "@mui/material";
import RadioGroupPost from "./RadioGroupPost";
import NumberInput from "./NumberFormat";
import { fetchDataPost } from "../../../store/todoSlice";
import { v4 as uuidv4 } from "uuid";
import UploadButtons from "./UploadButtons";

const PostSection = () => {
  const dispatch = useDispatch();
  const [tokenId, SetTokenId] = useState("");

  useEffect(() => {
    try {
      const data = async function () {
        const respons = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/token"
        );
        const data = await respons.json();
        if (data.success === true) {
          SetTokenId(data.token);
          return data.token;
        }
      };
      data();
    } catch (error) {
      new Error(error);
    }
  }, []);
  //console.log(tokenId, "token");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    position: "",
    photo: "",
  };

  const onSubmit = (value, { resetForm }) => {
    //console.log(value, "value");
    dispatch(
      fetchDataPost({
        ...value,
        position_id: uuidv4(),
        token: `${tokenId}`,
      })
    );
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я]/, "only letters,"),
    email: Yup.string("not correct")
      .email("not correct")
      .required("This field is requried"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("The field is required"),
    position: Yup.string().required(""),
    photo: Yup.string().required(""),
  });

  return (
    <section className="post">
      <h2 className="title">Working with POST request</h2>
      <Formik
        className="post__section"
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ isValid, dirty }) => {
          return (
            <Form className="post__form inner-container">
              <PostInput
                type="text"
                name="name"
                fullWidth
                label="Your name"
                className="post-input"
              />
              <Box height={49} />
              <PostInput
                type="email"
                name="email"
                fullWidth
                label="Email"
                className="post-input"
              />
              <Box height={47} />
              <NumberInput
                name="phone"
                label="Phone"
                type="text"
                fullWidth
                className="post-input"
              />
              <Box height={43} />
              <RadioGroupPost name="position" />
              <Box height={39} />
              {/*<PostInput
                type="file"
                name="photo"
                fullWidth
                className="post-input"
              />*/}
              <UploadButtons />
              <Box height={48} />
              <Button
                text="Sign up"
                type="submit"
                disabled={!isValid || !dirty}
              />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
export default PostSection;
