export default (Notes,{Text}) => {
  return  Notes.filter((Note) => {
    const textMatch = Note.Text.toLowerCase().includes(Text.toLowerCase());
    const titleMatch = Note.Title.toLowerCase().includes(Text.toLowerCase());
    return  textMatch||titleMatch;
  }).sort((a, b) => {
      return a.CreatedAt < b.CreatedAt ? 1 : -1;
  });
};

