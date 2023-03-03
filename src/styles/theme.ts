import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html,body": {
        bg: "gray.50",
      },
    },
  },

  shadows: {
    box: "0px 0px 60px rgba(0, 0, 0, 0.06)",
    input: "0px 1px 0px #EFF0F6",
  },
  components: {
    Popover: {
      baseStyle: {
        popper: {
          width: "fit-content",
          maxWidth: "fit-content",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "sm",
        fontWeight: "normal",
      },
    },

    Checkbox: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Text: {
      baseStyle: {
        color: "paragraph",
      },
    },
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: "sm",
            shadow: "input",
          },
        },
      },

      variants: {
        outline: {
          addon: {
            bg: "#f8f8f8",
            borderRadius: "sm",
            fontSize: "sm",
          },
        },
      },

      defaultProps: {
        _placeholder: {
          color: "red",
        },
      },
    },
    Textarea: {
      sizes: {
        md: {
          borderRadius: "sm",
          shadow: "input",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "heading",
      },
    },
    FormLabel: {
      baseStyle: {
        // fontSize: "sm",
        fontWeight: "semibold",
        // mb: "3",
      },
    },

    Select: {
      sizes: {
        md: {
          field: {
            borderRadius: "sm",
            shadow: "input",
          },
        },
      },
    },
    Table: {
      baseStyle: {
        tr: {
          "&:last-of-type": {
            td: {
              borderBottom: "none",
            },
          },
        },
      },
    },
    Card: {},
  },
});

export default theme;
