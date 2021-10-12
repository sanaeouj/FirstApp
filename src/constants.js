export const STATIC_HELLO = "hello World";

export const textInputProps = {
  default: {
    placeholder: "Enter your text",
    type: "text",
    label: "Enter your info",
  },
  email: {
    placeholder: "Enter your email",
    type: "email",
    label: "Enter your email",
  },
  password: {
    placeholder: "Enter your password",
    type: "password",
    label: "Enter your Password",
  },
  color: {
    placeholder: "Enter your color",
    type: "color",
    label: "Enter your color",
  },
};

export const bootstrapButtonVariant = {
  danger: "danger",
  success: "success",
  outlineWarning: "outline-warning",
};

export const buttonTexts = {
  danger: "danger",
  success: "success",
  outlineWarning: "outline-warning",
};

export const figureProps = {
 
  defaults: {
    width: 150,
    height: 180,
    image:
      "https://images-ext-2.discordapp.net/external/6e_r2MfN2xtquWo29P_0VQfaoSOL_1pUSs6NEccDn54/https/media.wired.com/photos/5d09594a62bcb0c9752779d9/1%3A1/w_1500%2Ch_1500%2Cc_limit/Transpo_G70_TA-518126.jpg",
    titre: "voiture",
  },
  maison: {
    width: 150,
    height: 180,
    image:
      "https://media.istockphoto.com/photos/male-hand-showing-offering-a-new-dream-house-at-the-empty-field-with-picture-id1205274326",
    titre: "maison",
  },
  ordinateur: {
    width: 150,
    height: 180,
    image:
      "https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg",
    titre: "ordinateur",
  },
};
export const authUser = {
  email: "othmane@gmail.com",
  password: "123456",
};
export const credentialsState = {
  error: " Credentials are incorrects",
  success: "Congratulations",
};
export const customNavbarProps = {
  default: {
    background: "primary",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
    logo: "My web site",
    navLink: [{ keyLink:"key5", link: "#home", text: "Homed" }],
  },
  dark: {
    background: "dark",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
  },
  light: {
    background: "light",
    variant: "light",
    navHome: "#home",
    className: "me-auto",
  },
};
export const logoProps = {
  url: "https://static.vecteezy.com/system/resources/thumbnails/002/229/196/small_2x/beauty-lotus-flowers-design-logo-template-icon-free-vector.jpg",

  default: {
    width: "50px",
    height: "50px",
  },
  smartphone: {
    width: "25px",
    height: "25px",
  },
  tablette: {
    width: "30px",
    height: "30px",
  },
};
export const navLinks = [
  { keyLink: "key1", link: "#home", text: "Home" },
  { keyLink: "key2", link: "#about", text: "About" },
  { keyLink: "key3", link: "#hfeatures", text: "Features" },
];
export const buttonProps={
  default:{
    color:"secondary",
    text:"bien",
    type:"text"
  },
  color:{
  primary: "primary",
  success: "success",
  info: "info",
  secondary: "secondary",
  outlineSuccess:"outline-success",
  outlineDanger:"outline-danger",
  warning:"warning",
  },
  text:{
    submit:"Se connecter",
    ajouter:"Add",
    todoDone:"✔",
    todosupp:"X",
  },
  type:{
    submit:"submit",
    
  },
  className:{
    classpad:"pad",
  },
};
export const listeEmailPassword=[

  { email: "a@a.com", password: "p1"},
  { email: "b@b.com", password: "p2"},
  { email: "c@c.com", password: "p3"},
];