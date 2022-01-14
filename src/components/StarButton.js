import { Suspense, useState } from "react";
import { Variants, Transition } from "framer-motion";
import { StarIcon } from "./StarIcon";
import {Button, Current, Default, Icon, Label, New, Number, Success} from "./Styles";

// Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
export default function StarButton() {
	const [isHover, setIsHover] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	
	return (
		<Button
			initial={false}
			animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : "rest"]}
			whileTap="press"
			variants={buttonVariants}
			onHoverStart={() => setIsHover(true)}
			onHoverEnd={() => setIsHover(false)}
			onClick={() => setIsLiked(!isLiked)}
		>
			<Icon
				variants={{
					liked: { opacity: 0, transition: iconFadeTransition },
					hover: isLiked
						? { opacity: 0, transition: iconFadeTransition }
						: { opacity: 1 }
				}}
			>
				<Suspense fallback={null}>
					<StarIcon isHover={isHover} isLiked={isLiked} />
				</Suspense>
			</Icon>
			<Label>
				<Default variants={labelTextVariants}>
					Star
					<Success variants={successTextVariants}>
						red
					</Success>
				</Default>
			</Label>
			<Number>
				<Current variants={currentCountVariants}>
					38
				</Current>
				<New variants={newCountVariants}>
					39
				</New>
			</Number>
		</Button>
	);
}

const iconFadeTransition: Transition = { duration: 0.2, delay: 0.3 };

const likedTransition: Transition = {
	duration: 0.25,
	delay: 0.3
};

const buttonVariants: Variants = {
	rest: {
		"--button-star-greyscale": "100%",
		"--button-star-contrast": "0%",
		transition: { duration: 0.7 }
	},
	hover: {
		"--button-star-greyscale": "0%",
		"--button-star-contrast": "100%",
		scale: 1.2,
		y: -8
	},
	press: { scale: 1.1 }
};

const labelTextVariants: Variants = {
	unliked: { x: 0 },
	liked: { x: -70 }
};

const successTextVariants: Variants = {
	unliked: { opacity: 0 },
	liked: { opacity: 1 }
};

const currentCountVariants: Variants = {
	unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
	liked: { opacity: 0, y: -40, transition: likedTransition }
};

const newCountVariants: Variants = {
	unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
	liked: { opacity: 1, y: 0, transition: likedTransition }
};
