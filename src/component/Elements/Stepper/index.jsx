import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Stepper = (props) => {
  const { desc } = props; // Mengambil desc dari props

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < desc.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  // Pastikan desc adalah array dan memiliki panjang
  if (!Array.isArray(desc) || desc.length === 0) {
    return <div>No steps available</div>;
  }

  return (
    <div>
      {/* Menampilkan konten sesuai dengan activeStep */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        {desc[activeStep]}
      </div>

      {/* Mobile Stepper */}
      <MobileStepper
        variant="dots"
        steps={desc.length} // Menyesuaikan jumlah langkah berdasarkan panjang desc
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === desc.length - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Stepper;
