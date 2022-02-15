import { useRouter } from "next/router";

interface CustomLinkProps {
  showPointer?: boolean;
  href: string;
  children: any;
}

const CustomLink = ({ href, showPointer = true, children, ...props }: CustomLinkProps): JSX.Element => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(href);
      }}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default CustomLink;
