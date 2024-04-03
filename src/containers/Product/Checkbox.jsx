import { Checkbox } from "@material-tailwind/react";

export function CheckboxRippleEffect(props) {
  return (
    <div>
      <Checkbox id="ripple-on" label={props.title} ripple={true} />
    </div>
  );
}
