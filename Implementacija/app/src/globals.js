const PATH_BASE = 'http://localhost:8080';
const PATH_LOGIN = '/prijava';

const PATH_OBAVJESTENJA = '/obavjestenja';
const PATH_OBAVJESTENJA_FIND = '/pregled';

const PATH_PREDMETI = '/pohadjanje';
const PATH_PREDMETI_FIND = '/pregled';
const PARAM_STUDENT_FUTURE = '/buduci_predmeti';

const PATH_STUDENT = '/student';
const PATH_STUDENT_PROFILE = '/profile'
const PATH_STUDENT_PASSWORD ='/update_password';

const PATH_ISPIT = '/ispit';
const PATH_ISPIT_PRIJAVLJENI_FIND = '/prijavljeni';
const PATH_ISPIT_NEPRIJAVLJENI_FIND = '/neprijavljeni';
const PATH_ISPIT_HISTORIJA_FIND = '/historija';



const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then((val) =>
      hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export {
	makeCancelable,

	PATH_BASE,
  PATH_LOGIN,

	PATH_OBAVJESTENJA,
	PATH_OBAVJESTENJA_FIND,


	PATH_PREDMETI,
	PATH_PREDMETI_FIND,
  PARAM_STUDENT_FUTURE,

  PATH_STUDENT,
  PATH_STUDENT_PROFILE,
  PATH_STUDENT_PASSWORD,

  PATH_ISPIT,
  PATH_ISPIT_PRIJAVLJENI_FIND,
  PATH_ISPIT_NEPRIJAVLJENI_FIND,
  PATH_ISPIT_HISTORIJA_FIND
}
