import { WrapperContainer, Spinner } from "./styles";

type Props = {
	loading: boolean;
};

const Loading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & Props> => ({
	loading,
	...otherProps
}: Props) => {
	return loading ? (
		<WrapperContainer>
			<Spinner />
		</WrapperContainer>
	) : (
		<Component {...(otherProps as P)} />
	);
};

export default Loading;
