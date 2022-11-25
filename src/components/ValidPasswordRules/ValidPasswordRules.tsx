import React from "react";
import {List,ListItem,ListItemIcon,ListItemText,Typography} from "@mui/material";
import { HelpPasswordContainer } from "./ValidPasswordRules.styles";
import {validateLength,validateLowerCase,validateUpperCase,validateSpecial,validateNumbers,validadeNumberSequence,validadeCharSequence} from "utils/ValidatePassword";

interface ValidPasswordRulesProps {
  password: string;
}

export const ValidPasswordRules: React.FC<ValidPasswordRulesProps> = ({
  password,
}) => {
  const [length, setLength] = React.useState<boolean>(false);
  const [specialChar, setSpecialChar] = React.useState<boolean>(false);
  const [upper, setUpper] = React.useState<boolean>(false);
  const [lower, setLower] = React.useState<boolean>(false);
  const [number, setNumber] = React.useState<boolean>(false);
  const [sequenceNum, setSequenceNum] = React.useState<boolean>(false);
  const [sequenceChar, setSequenceChar] = React.useState<boolean>(false);

  const validade = () => {
    setLength(validateLength(password));
    setSpecialChar(validateSpecial(password));
    setUpper(validateUpperCase(password));
    setLower(validateLowerCase(password));
    setNumber(validateNumbers(password));
    setSequenceNum(validadeNumberSequence(password));
    setSequenceChar(validadeCharSequence(password));
  }
  React.useEffect(()=> {
    validade();
  }, [password])
  
  return (
    <HelpPasswordContainer>
      <Typography>Password's Rules</Typography>
      <List>
        <ListItem disablePadding className={specialChar ? "right" : "wrong"}>
          <ListItemIcon className={specialChar ? "right" : "wrong"}>
          </ListItemIcon>
          <ListItemText primary="At least one special character" />
        </ListItem>

        <ListItem
          disablePadding
          className={length ? "right": "wrong"}
        >
          <ListItemIcon className={length ? "right" : "wrong"}>
          </ListItemIcon>
          <ListItemText primary="Between 8 and 16 characters" />
        </ListItem>

        <ListItem
          disablePadding
          className={
            upper && lower && number ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              upper && lower && number ? "right" : "wrong"
            }
          >
          </ListItemIcon>
          <ListItemText primary="contain uppercase, lowercase and numbers" />
        </ListItem>

        <ListItem
          disablePadding
          className={
            sequenceNum ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              sequenceNum ? "right" : "wrong"
            }
          >
          </ListItemIcon>
          <ListItemText primary="Cannot have sequence of numbers" />
        </ListItem>

        <ListItem
          disablePadding
          className={
           sequenceChar ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              sequenceChar ? "right" : "wrong"
            }
          >
          </ListItemIcon>
          <ListItemText primary="Cannot have sequence of letters" />
        </ListItem>
      </List>
    </HelpPasswordContainer>
  );
};