"use client";
import { SignUp, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useSearchParams } from "next/navigation";

const SignUpComponent = () => {
  const { user } = useUser();
  const searchParams = useSearchParams();

  const isCheckOutPage = searchParams.get("showSignUp") !== null;
  const courseId = searchParams.get("id");

  //first one is for checkout page and second one is for normal sign up page
  const signInUrl = isCheckOutPage
    ? `/checkout?step=1&id=${courseId}&showSignUp=false`
    : "/signin";
  //for redirecting from signup page
  const getRedirectUrl = () => {
    if (isCheckOutPage) {
      return `/checkout?step=2&id=${courseId}`;
    }
    const userType = user?.publicMetadata?.userType as string;
    if (userType === "teacher") {
      return `/teacher/courses`;
    }
    return "/user/courses";
  };
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
        elements: {
          formFieldLabel: "text-white-50 font-normal",
          rootBox: "flex justify-center items-center py-5",
          cardBox: "shadow-none",
          card: "bg-customgreys-secondarybg w-full shadow-none",
          footer: {
            background: "#25262F",
            padding: "0rem 2.5rem",
            "& > div > div:nth-child(1)": {
              background: "#25262F",
            },
          },
          formButtonPrimary:
            "bg-primary-700 text-white-100 hover:bg-primary-600 !shadow-none",
          formFieldInput: "bg-customgreys-primarybg text-white-50 !shadow-none",
          footerActionLink: "text-primary-750 hover:text-primary-600",
        },
      }}
      signInUrl={signInUrl}
      forceRedirectUrl={getRedirectUrl()}
      routing="hash"
      afterSignOutUrl={"/"}
    />
  );
};

export default SignUpComponent;
