import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTipCalculator, removeTipCalculator } from "redux/slices/testSlices";
import { TipCalculatorHistory } from "type";
import { RootState } from "../redux/store";
import { StyledInputsWrapper, StyledInputWithLabel } from "./style";

const MainPage = (): JSX.Element => {
  const tipCalculator: TipCalculatorHistory[] = useSelector(
    (state: RootState) => state.testSlices.value
  );

  React.useEffect(() => {
    //
    console.log(tipCalculator);
  }, [tipCalculator]);

  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState<number>(0);
  const [percentage, setPercentage] = React.useState<number>(0);
  const [amountResult, setAmountResult] = React.useState<string>("");

  // dispatch this new calculator object to redux and save the result string
  const submitCalculate = () => {
    // dispatch this new calculator object to redux
    dispatch(
      addTipCalculator({
        amount: amount,
        percentage: percentage,
        tip: amount * percentage,
      })
    );
    //save the result string
    setAmountResult(
      `Amount:$${amount},Percentage:${percentage}%,Tip:${
        percentage === 0 ? "" : (amount * percentage) / 100
      }`
    );
    //clear amount and percentage
    setAmount(0);
    setPercentage(0);
  };

  const removeHistoryItem = (index: number) => {
    dispatch(removeTipCalculator({ index: index }));
  };

  return (
    <>
      <div>
        <h1>Tip Calculator</h1>
        <StyledInputsWrapper>
          <StyledInputWithLabel>
            <p>Amount($)</p>
            <input
              value={amount}
              onChange={(v) => {
                setAmount(parseInt(v.target.value));
              }}
            />
          </StyledInputWithLabel>
          <StyledInputWithLabel>
            <p>Percentage(%)</p>
            <input
              value={percentage}
              onChange={(v) => {
                setPercentage(parseInt(v.target.value));
              }}
            />
          </StyledInputWithLabel>
        </StyledInputsWrapper>
        <button onClick={() => submitCalculate()}>Calculate</button>
        <p>{amountResult}</p>
        <h1>History</h1>
        <>
          {tipCalculator &&
            tipCalculator.length > 0 &&
            tipCalculator.map((item, index) => {
              return (
                <div>
                  <p>{`Amount:$${item.amount},Percentage:${
                    item.percentage
                  }%,Tip:${
                    item.percentage === 0
                      ? ""
                      : (item.amount * item.percentage) / 100
                  }`}</p>
                  <button onClick={() => removeHistoryItem(index)}>
                    delete
                  </button>
                </div>
              );
            })}
        </>
      </div>
    </>
  );
};

export default MainPage;
