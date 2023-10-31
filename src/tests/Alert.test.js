import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert"

test('displays an error message', () => {
        const { getByText } = render(<Alert message="Error!" />);
      
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(/Error/).textContent).toBe("Error!");
      });

      test("displays a success message", () => {
        const { getByText } = render(<Alert message="Success!!!!" success />);
      
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(/Success/).textContent).toBe("Success!!!!");
      });

      test("does not render an error or a success message if message props is empty", () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();

        expect(alert).toMatchSnapshot();
      });