import { Suspense, useState } from "react";
import { Variants, Transition } from "framer-motion";
import {Button, Default, Icon, Label, Success, Change} from "./Styles";
import {PencilIcon} from "./PencilIcon";

// Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
export default function PencilButton() {
	const [isHover, setIsHover] = useState(false);
	const [isSent, setIsSent] = useState(false);
	
	return (
		<Button
			initial={false}
			animate={[isSent ? "sent" : "unsent", isHover ? "hover" : "rest"]}
			whileTap="press"
			variants={buttonVariants}
			onHoverStart={() => setIsHover(true)}
			onHoverEnd={() => setIsHover(false)}
			onClick={() => setIsSent(!isSent)}
		>
			<Icon
				variants={{
					sent: { opacity: 0, transition: iconFadeTransition },
					hover: isSent
						? { opacity: 0, transition: iconFadeTransition }
						: { opacity: 1 }
				}}
			>
				<Suspense fallback={null}>
					<PencilIcon isHover={isHover} isSent={isSent} />
				</Suspense>
			</Icon>
			<Label variants={labelVariants}>
				<Default>
					Sen
					<Change variants={changeTextVariants}>
						d!
					</Change>
					<Success variants={successTextVariants}>
						t!
					</Success>
				</Default>
			</Label>
		</Button>
	);
}

const iconFadeTransition: Transition = { duration: 0.2, delay: .5 };

const sentTransition: Transition = {
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

const successTextVariants: Variants = {
	unsent: { opacity: 0, y: -30 },
	sent: { opacity: 1, y: 0 }
};

const changeTextVariants: Variants = {
	unsent: { opacity: 1, y: 0 },
	sent: { opacity: 0, y: 30 }
}

const labelVariants: Variants = {
	unsent: { x: -48 },
	sent: { x: -24}
}