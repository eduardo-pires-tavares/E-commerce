import { WrapperContainer, Spinner } from "./styles";

type loadingProps = {
	loading?: boolean;
};

const Loading = <P extends object>(
	Component: React.ComponentType<P>,
): React.FC<P & loadingProps> => ({ loading, ...otherProps }: loadingProps) => {
	return loading ? (
		<WrapperContainer>
			<Spinner />
		</WrapperContainer>
	) : (
		<Component {...(otherProps as P)} />
	);
};

export default Loading;
