interface CountryFlagProps {
  name: string;
  flag: string;
}

export const CountryFlag = (props: CountryFlagProps) => {
  return <img alt={`${props.name} flag`} src={props.flag} />;
};

export default CountryFlag;
