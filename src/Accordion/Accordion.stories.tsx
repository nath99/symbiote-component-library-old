import React from 'react';
import Accordion from './Accordion';

export default {
    title: "Accordion"
}

export const PrimaryAccordion = () => <Accordion accordionContent={[
    {
        title: "First accordion tab",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur in facilisis diam.Aenean tincidunt erat at nulla sagittis ultrices.Suspendisse id molestie velit."
    },
    {
        title: "Second accordion tab",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit."
    },
    {
        title: "Third accordion tab",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit."
    }
]} />;