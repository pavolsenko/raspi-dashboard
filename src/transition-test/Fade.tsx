import { Transition } from 'react-transition-group';
import React from 'react';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles: Record<string, Record<string, number>> = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

interface IFadeProps {
    in: boolean;
    children: React.ReactNode;
}

export const Fade: React.FC<IFadeProps> = (props: IFadeProps) => (
    <Transition in={props.in} timeout={duration}>
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                {props.children}
            </div>
        )}
    </Transition>
);
