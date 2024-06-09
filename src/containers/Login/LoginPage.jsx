import React, { useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Checkbox from "@mui/material/Checkbox";
import "./Welcome.css";
import { auth } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ExampleV3() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(""); // State to hold error messages
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser);
        setUser(currentUser);
        navigate("/account");
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError(""); // Reset error message

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log("User created successfully:", data.user);
        navigate("/home"); // **Navigate to account page on success**
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError(
            "The email address is already in use. Please try logging in."
          );
        } else {
          setError("Error creating user: " + error.message);
        }
        console.error("Error creating user:", error);
      });
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* Error message */}
              {error && <div className="mb-4 text-red-600">{error}</div>}

              {/* Email input */}
              <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6 te-input-label"
                name="email"
              />

              {/* Password input */}
              <TEInput
                type="password"
                label="Password"
                className="mb-6 te-input-label"
                size="lg"
                name="password"
              />

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                  <Checkbox {...label} defaultChecked className="" />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#3a71ca]"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a
                  href="#!"
                  className="text-[red] text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 bg-[#3a71ca]"
                >
                  Sign in
                </button>
              </TERipple>

              {/* Divider */}
              <div className="my-4 flex items-center">
                <div className="flex-1 border-t border-neutral-300"></div>
                <p className="mx-4 mb-0 text-center font-semibold">OR</p>
                <div className="flex-1 border-t border-neutral-300"></div>
              </div>

              {/* Social login buttons */}
              <TERipple rippleColor="light" className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Continue with Facebook
                </a>
              </TERipple>
              <TERipple rippleColor="light" className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-info-600 focus:bg-info-600 active:bg-info-700"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Continue with Twitter
                </a>
              </TERipple>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
