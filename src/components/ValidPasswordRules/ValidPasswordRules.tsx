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
      <Typography>Regras de senha</Typography>
      <List>
        <ListItem disablePadding className={specialChar ? "right" : "wrong"}>
          <ListItemIcon className={specialChar ? "right" : "wrong"}>
          </ListItemIcon>
          <ListItemText primary="Pelo menos um caractere especial" />
        </ListItem>

        <ListItem
          disablePadding
          className={length ? "right": "wrong"}
        >
          <ListItemIcon className={length ? "right" : "wrong"}>
          </ListItemIcon>
          <ListItemText primary="Entre 8 e 16 caracteres" />
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
          <ListItemText primary="Conter letras maiúsculas, minúsculas e números" />
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
          <ListItemText primary="Não pode ter sequência de números" />
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
          <ListItemText primary="Não pode ter sequência de letras" />
        </ListItem>
      </List>
    </HelpPasswordContainer>
  );
};