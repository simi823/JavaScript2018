/**
 * We are faking the AJAX responses because I do not have a server
 */

import categories from "./constants/categories";

export const fetchAllNomineesRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(); // Uncomment if you need to similulate and AJAX request failure
      return resolve({
        retCode: 1,
        retMessage: "Success",
        categories: categories
      });
    }, 500);
  });
};

export const voteRequest = (memberId, categoryId, nomineeIndex) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(); // Uncomment if you need to similulate and AJAX request failure
      return resolve({
        retCode: 1,
        retMessage: "Success"
      });
    }, 100);
  });
};
