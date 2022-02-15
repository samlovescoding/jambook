interface AuthInputProps {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  labelProps?: any;
  inputProps?: any;
  containerProps?: any;
  value: string;
  onChange: (newValue: string) => void;
}

const AuthInput = ({
  label,
  id,
  placeholder,
  type,
  labelProps,
  inputProps,
  containerProps,
  value,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="form-group jb-form-group-auth" {...containerProps}>
      <label className="jb-form-group-auth-label" htmlFor={id} {...labelProps}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className="form-control jb-form-group-auth-in"
        type={type}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};

export default AuthInput;
