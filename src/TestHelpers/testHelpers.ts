import { Nullish } from '@testing-library/react';

/**
 * Function for finding text that is spread across tags.
 * 
 * Solution found here:
 * https://stackoverflow.com/a/56859650
 * 
 * @example await screen.findByText(getByTextWithMarkup('itemqtyscore'));
 * 
 * @param text  The text to be found
 * 
 * @returns A matcher function that can be used to find the given text
 */
 export const getByTextWithMarkup = (text: string) => 
 (_: string, node: Nullish<Element>): boolean => {
     // Define function for checking if a node matches
     const hasText = (node: Nullish<Element>): boolean => node?.textContent === text;

     // Check child nodes
     const nodeHasText = hasText(node);
     const children = node?.children === undefined ? new HTMLCollection() : node.children;
     const childrenDontHaveText = Array.from(children).every(
         child => !hasText(child)
     );

     return nodeHasText && childrenDontHaveText;
 };