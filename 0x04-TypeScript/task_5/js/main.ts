interface MajorCredits {
  credits: number;
  brand: MajorCredits["credits"];
}

interface MinorCredits {
  credits: number;
  brand: MinorCredits["credits"];
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1["credits"],
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: subject1["credits"],
  };
}
