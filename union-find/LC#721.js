// 721. Accounts Merge

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {
  const mailParent = {};
  const mailOwner = {};
  const group = {};

  const find = (mail) => {
    if (mailParent[mail] !== mail) {
      mailParent[mail] = find(mailParent[mail]);
    }
    return mailParent[mail];
  };

  const union = (mail1, mail2) => {
    const root1 = find(mail1);
    const root2 = find(mail2);

    if (root1 !== root2) mailParent[root1] = root2;
  };

  accounts.forEach(([name, ...emails]) => {
    emails.forEach(mail => {
      if (!mailParent[mail]) mailParent[mail] = mail;
      mailOwner[mail] = name;
      union(emails[0], mail);
    })
  })

  Object.keys(mailParent).forEach(mail => {
    const root = find(mail);

    if (group[root]) {
      group[root].push(mail);
    } else {
      group[root] = [mail];
    }
  })

  return Object.entries(group).map(([parent, mails]) => {
    return [mailOwner[parent], ...mails.sort()];
  });
};

const accounts = [
  ["John","johnsmith@mail.com","john_newyork@mail.com"],
  ["John","johnsmith@mail.com","john00@mail.com"],
  ["John","johnsmith@mail.com","yy0@mail.com"],
  ["John","johnsmith@mail.com","yy0@mail.com"],
  ["John","johnsmith@mail.com","yy0@mail.com"],
  ["Mary","mary@mail.com"],
  ["John","johnnybravo@mail.com"]
];

console.log('---res:', accountsMerge(accounts));

// Sol:
// [
//   ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
//   ["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]
// ]