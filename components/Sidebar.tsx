import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  ListItem,
  List,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const NavMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" paddingX="20px" marginBottom="20px">
          <NextImage src="/spotify-1.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {NavMenu.map((item) => {
              return (
                <ListItem paddingX="20px" key={item.name} fontSize="16px">
                  <LinkBox>
                    <NextLink href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={item.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {item.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
