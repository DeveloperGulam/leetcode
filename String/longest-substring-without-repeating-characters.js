# [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

---

**leetcode Daily Challenge on January 7th, 2021.**

---

> **Difficulty** : **Medium**
>
> **Related Topics** : **String**、**Two Pointers**、**HashTables**、**Sliding Window**

---

> Given a string, find the length of the **longest substring** without repeating characters.
>
> ### Example 1:
> ```
> Input: "abcabcbb"
> Output: 3
> Explanation: The answer is "abc", with the length of 3.
> ```
>
> ### Example 2:
> ```
> Input: "bbbbb"
> Output: 1
> Explanation: The answer is "b", with the length of 1.
> ```
>
> ### Example 3:
> ```
> Input: "pwwkew"
> Output: 3
> Explanation: The answer is "wke", with the length of 3.
>              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
> ```

---

### Solution


var lengthOfLongestSubstring = function(s) {
    let m= {}
    let start = 0;
    let maxlen = 0;
    let arr = s.split('');
    
    for (i=0; i<s.length; i++){
        let current = m[arr[i]];
        if(current!=null && start<= current){
            start = current +1;
        } else {
            maxlen = Math.max(maxlen, i - start +1)
        }
        m[arr[i]] = i;
    }
    return maxlen;
};


---
