import { Box } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";

// 1. Create a component that consumes the `useRadio` hook
export function RadioButton(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      onChange={() => {
        props.changeHandler && props.changeHandler();
      }}
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        _checked={{
          bg: "gray.300",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
