import { AppLogo, AuthBackground } from "components/icons";
// import { ENV } from "constants";

export const MASCOT_IMG_ALT = "Mascot";
export const AUTH_LAYOUT_MASCOT_CONTAINER_TEST_ID =
  "auth-layout-mascot-container";
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-h-screen w-full flex text-accent">
      <div
        className="flex-1 hidden lg:flex flex-col justify-start gap-y-16 px-4 py-2 relative"
        data-testid={AUTH_LAYOUT_MASCOT_CONTAINER_TEST_ID}
      >
        <div className="absolute top-0 right-0 left-0 bottom-0 -z-10 overflow-hidden">
          <AuthBackground className="" />
        </div>
        <div className="ml-8 lg:mt-16">
          <AppLogo colorMode="light" className="h-12" />
        </div>
        <div className="flex-1 pb-32 flex items-center justify-center">
          <div className="text-center">
            <h2 data-aos="fade-down" className="text-white text-xl font-bold">
              Great To Have You Back!
            </h2>
            <p className="pt-6 pb-4 text-accent">
              We provide you with a better and more dependable approach to
              <br className="hidden md:flex" />
              managing business opertations of hcmatrix v3.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-card flex justify-center items-center px-4 h-screen max-h-screen">
        <div className="lg:w-[38vw] w-[80vw]">
          <div className="lg:hidden mb-6 flex justify-end">
            <AppLogo colorMode="dark" className="h-12" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
